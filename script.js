const xhr = new XMLHttpRequest()

const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        document.querySelector('.a1').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 1));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
        document.querySelector('.a2').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 2));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
        document.querySelector('.a3').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 3));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
        document.querySelector('.a4').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 4));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
        document.querySelector('.a5').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 5));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a6').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 6));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a7').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 7));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a8').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 8));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a9').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 9));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a10').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 10));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a11').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 11));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a12').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 12));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a13').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 13));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a14').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 14));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a15').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 15));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a16').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 16));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a17').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 17));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a18').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 18));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a19').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 19));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
		document.querySelector('.a20').addEventListener('click', () => {
            const album = response.filter((item) => (item.albumId === 20));
            var output = ''
            for (let i = 0; i < album.length; i++) {
                output += `
					<img style="width:150px" src=${album[i].url} />
				`
            }
            document.querySelector('.modal-body').innerHTML = output
        })
    }
}

xhr.send()

document.querySelector('.submitbtn').addEventListener('click', () => {
    const album = document.querySelector('#albumname').value;
    const image = document.querySelector('#image').value;
    const temp = album.toLowerCase();
    console.log(temp);

})

