import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input } from 'components';
import CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(1);
  const [ref, setRef] = useState(null);
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const auth = useSelector((state) => state.user.auth);

  useEffect(() => {
    setLoad(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/api/article/create.php?auth=${auth}`,
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          setRef(response.ref);
          setLoad(false);
        }
      });
    return () => {
      setLoad(false);
    };
  }, [auth]);

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
  if (load) return <p>Tworzenie plików...</p>;
  return (
    <>
      <label>
        Podaj tytuł : <Input onChange={(e) => setTitle(e.target.value)} />
      </label>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: ['ImageResize'],
          ckfinder: {
            uploadUrl: `${process.env.REACT_APP_API_URL}/api/upload/file.php?ref=${ref}`,
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
      <Button ico={save ? 'save-load' : 'save'} onClick={handleSaveArticle}>
        {save ? 'Zapisywanie' : 'Zapisz'}
      </Button>
    </>
  );
};

export default NewArticle;
