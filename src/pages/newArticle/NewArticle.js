import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(1);
  // const [load, setload] = useState(false);
  const auth = useSelector((state) => state.user.auth);
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={
          {
            image: {
              resizeUnit: 'px',
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
                // 'imageUpload',
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
    </div>
  );
};

export default NewArticle;
