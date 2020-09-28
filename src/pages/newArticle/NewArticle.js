import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'components';
// import { ImageResize } from '@ckeditor/ckeditor5-image/src/imageresize';
import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeedititing';
// import ImageResizeButtons from '@ckeditor/ckeditor5-image/src/imageresize/imageresizebuttons';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeedititing';

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
        config={
          {
            // plugins: Image,
            extraPlugins: { ImageResize },
            ckfinder: {
              uploadUrl: `${process.env.REACT_APP_API_URL}upload/file.php`,
            },

            image: {
              resizeUnit: 'px',
              resizeOptions: [
                {
                  name: 'imageResize:original',
                  value: null,
                  icon: 'original',
                },
                {
                  name: 'imageResize:50',
                  value: '50',
                  icon: 'medium',
                },
                {
                  name: 'imageResize:75',
                  value: '75',
                  icon: 'large',
                },
              ],
              toolbar: [
                // ...,
                'imageResize:50',
                'imageResize:75',
                'imageResize:original',
              ],
            },
            toolbar: {
              items: [
                'heading',
                '|',
                'bold',
                'italic',
                'bulletedList',
                'numberedList',
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
          }
          // Use the German language for this editor.

          // ...
        }
        data={content}
        onInit={(editor) => {}}
        onChange={(event, editor) => {
          console.log(event);
          const data = editor.getData();
          setContent(data);
        }}
      />
    </>
  );
};

export default NewArticle;
