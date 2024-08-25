// Importing the required modules
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const user_id = "dhruv_thomas_philip_15032003"
const email = "dhruvthomas.philip2021@vitstudent.ac.in"
const roll_number = "21BCB0079"

// Middleware to parse JSON bodies (optional)
app.use(express.json());
app.use(cors());

// Basic route for the home page
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code":1
    })
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    console.log('got data')
    // Separate numbers and alphabets
    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        // Check if item is a number
        if (!isNaN(item)) {
            numbers.push(item);
        }
        // Check if item is an alphabet
        else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });
    res.json({
        "is_success":true,
        "user_id":user_id,
        "email":email,
        "roll_number":roll_number,
        "numbers":numbers,
        "alphabets":alphabets,
        "highestLowercaseAlphabet": highestLowercaseAlphabet
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});