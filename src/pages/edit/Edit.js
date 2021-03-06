import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input, Select } from 'components';
import CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

const Edit = (props) => {
  const ref = props.match.params.ref;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('<br>');
  const [category, setCategory] = useState(1);
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const auth = useSelector((state) => state.user.auth);
  const categoryItems = useSelector((state) => state.config.category);
  const isLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/article/${ref}/index.html`)
      .then((response) => response.text())
      .then((response) => setContent(response));

    return () => {
      setContent('');
    };
  }, [ref]);

  const handleSaveArticle = () => {
    setSave(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('article', content);
    formData.append('category', category);
    formData.append('auth', auth);
    formData.append('ref', ref);
    const url = `${process.env.REACT_APP_API_URL}/api/article/save.php`;
    fetch(url, { method: 'POST', body: formData })
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          alert('ok dodano');
        } else {
          alert(response.error);
        }
        setSave(false);
      });
  };

  return (
    <>
      <label>
        Podaj tytuł :
        <Input onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Wybierz dział:
        <Select items={categoryItems} />
      </label>
      <CKEditor
        editor={ClassicEditor}
        config={{
          ckfinder: {
            uploadUrl: `${process.env.REACT_APP_API_URL}/api/upload/file.php?ref=${ref}`,
          },
          image: {
            resizeUnit: '%',
            styles: ['alignLeft', 'alignCenter', 'alignRight'],
            alignment: {
              options: ['left', 'center', 'right'],
            },
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
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableCellProperties',
              'tableProperties',
            ],
          },
          toolbar: {
            items: [
              'heading',
              'fontSize',
              '|',
              'fontColor',
              'fontBackgroundColor',
              'bold',
              'italic',
              'bulletedList',
              'numberedList',
              'alignment',

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
      <Button ico={save ? 'save-load' : 'save'} onClick={handleSaveArticle}>
        {save ? 'Zapisywanie' : 'Zapisz'}
      </Button>
    </>
  );
};

export default Edit;
