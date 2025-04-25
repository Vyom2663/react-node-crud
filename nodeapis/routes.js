const User = require('./userschema')

const getUser = async (req, res) => {
    try {
        const user = await User.find({});  // Find all users or add filter criteria here
        res.status(200).json({
            status: true,
            data: user
        });
    } catch (err) {
        console.error(err);  // Log the error
        res.status(500).json({
            status: false,
            data: "An error occurred while fetching users"
        });
    }
};

const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: false,
                data: "Name, email, and password are required"
            });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.status(200).json({
            status: true,
            data: user
        });
    } catch (err) {
        console.error(err);  // Log the error
        res.status(500).json({
            status: false,
            data: "An error occurred while creating the user"
        });
    }
};

const putUser = async (req, res) => {
    const { id } = req.params;
    const { name, email ,password} = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            { new: true } // returns the updated document
        );

        if (!user) {
            return res.status(404).json({
                status: false,
                data: "User not found"
            });
        }

        res.status(200).json({
            status: true,
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            data: "Error updating user"
        });
    }
};

const deleteUser = async (req, res) => {
    const {id} = req.params;

    try{
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json({
            status : true,
            data : deleteuser
        })
    }
    catch(error)
    {
        res.status(500).json({
            status : false
        })
    }
}

module.exports = {getUser,postUser,putUser,deleteUser}