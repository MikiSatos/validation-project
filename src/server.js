const app = require('./app');

// Render использует переменную окружения PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
