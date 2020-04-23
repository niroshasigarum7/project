module.exports = {
    get: ()  => {
        return Promise.resolve({
            "toolBarList": [
                "scrissor",
                "glue",
                "eraser"
            ],
            "rectangle": {
                "width": 200,
                "height": 100 
            },
            "triangle": {
                "dimension": {
                    "width": 700,
                    "height": 700
                }
            },
            "circle": {
                "dimension": {
                    "width": 200,
                    "height": 100
                }
            },
        })
    }
}
