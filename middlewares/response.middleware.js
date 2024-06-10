export const responseMiddleware = (req, res) => {
    if (res.error) {
        res.status(400).json({ error: res.error.message });
    } else {
        res.json(res.data);
    }
};

