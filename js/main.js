'use strict';
{
  // 投稿
  const posting = () => {
    const posts = document.querySelectorAll('.posting');
    const title = document.querySelector('.title');
    const photo = document.querySelector('.photos');
    const text = document.querySelector('.text');
    const errMsg = document.querySelector('.err-msg');
    errMsg.style.color = 'red';

    posts.forEach(post => {
      post.addEventListener('click', () => {
        if(!title.value) {
          errMsg.innerText = 'タイトルを入力してください！';
          return;
        }
        if(title.value.length > 200) {
          errMsg.innerText = 'タイトルは200文字以内で入力してください！';
          return;
        }

        if(!photo.value) {
          errMsg.innerText = '画像を選択してください！';
          return;
        }
        if(!text.value) {
          errMsg.innerText = '本文を入力してください！';
          return;
        }
        if(!confirm('投稿しますか？')) {
          return;
        }
        post.parentNode.submit();
      });
    });
  }
  posting();
}