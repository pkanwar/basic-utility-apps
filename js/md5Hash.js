const textInput = document.querySelector('#md5TextInput');
const md5Btn = document.querySelector('#md5HashBtn');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#output');

md5Btn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text create md5 hash');
    }
    // eslint-disable-next-line no-undef
    const md5Hash = CryptoJS.MD5(textInput.value);
    // eslint-disable-next-line no-console
    console.log(`md5 hash : ${md5Hash}`);
    output.value = md5Hash;
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
