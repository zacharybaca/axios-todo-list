

// GET Endpoint to Display All Todos
axios.get("https://api.vschool.io/zacharybaca/todo")
    .then(response => {
        let data = response.data;

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    })