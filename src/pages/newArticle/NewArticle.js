import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'components';
import CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(1);
  // const [load, setload] = useState(false);
  const auth = useSelector((state) => state.user.auth);

  const handleSaveArticle = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('article', content);
    formData.append('category', category);
    formData.append('auth', auth);
    const url = `${process.env.REACT_APP_API_URL}/api/article/add.php`;
    fetch(url, { method: 'POST', body: formData })
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          alert('ok dodano');
        } else alert(response.error);
      });
  };
  return (
    <>
      <label>
        Wybierz kategorię :
        {/* <CategorySelect
          selectDefault={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }} */}
        {/* /> */}
      </label>
      <label>
        Podaj nazwę : <Input onChange={(e) => setTitle(e.target.value)} />
      </label>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: ['ImageResize'],
          ckfinder: {
            uploadUrl: `${process.env.REACT_APP_API_URL}upload/file.php?id=234`,
          },
          image: {
            resizeUnit: '%',
            styles: ['alignLeft', 'alignCenter', 'alignRight'],
            resizeOptions: [
              {
                name: 'imageResize:original',
                label: 'Original',
                value: null,
              },
              {
                name: 'imageResize:25',
                label: '25%',
                value: '25',
              },
              {
                name: 'imageResize:50',
                label: '50%',
                value: '50',
              },
              {
                name: 'imageResize:75',
                label: '75%',
                value: '75',
              },
            ],
            toolbar: [
              'imageStyle:alignLeft',
              'imageStyle:alignCenter',
              'imageStyle:alignRight',
              '|',
              'imageResize',
              '|',
              'imageTextAlternative',
            ],
          },
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
          },
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              'bulletedList',
              'numberedList',
              'fontSize',
              'fontColor',
              'fontBackgroundColor',
              'link',
              '|',
              'indent',
              'outdent',
              '|',
              'blockQuote',
              'insertTable',
              'undo',
              'redo',
              'imageUpload',
            ],
          },
          language: 'pl',
          licenseKey: '',
        }}
        data={content}
        onInit={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
    </>
  );
};

export default NewArticle;
