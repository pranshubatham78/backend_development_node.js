// Controllers are the functions who are responsible for executing any task.

const sales = require("../models/sales");

/**
 * GET : Fetch all the items from the collection.
 * @ route : GET/api/sales
 */

const getItems = async(req,res)=>{
    try {
        const data = await sales.find();
        res.status(200).json(sales);  //----
    }
    
    catch (error){
        res.status(400).json({message: error.message});
    }
    
};


/**
 * POST : it allow clients to send data to the server.
 * @ route :    POST  /api/sales
 */

const createItem = async (req,res)=>{
    try{
        const data = await sales.insertMany(req.body);
        res.status(201).json(data);
    } 

    catch (error){
        res.status(400).json({message : error.message});
    }
};


module.exports = createItem;





/**
 * PUT : for updating the data in the collecting
 * @ route : PUT /api/sales
 */

const updateItem = async (req,res)=>{
    try {
        const data = await sales.findByIdAndUpdate(req.params.id,req.body,{new : true});
        if(!data){
            return res.status(404).json({message:"item not found"});
        }
        res.status(200).json(data);
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
};


/**
 * DELETE : it helps to delete the fields from the collection.
 * @ route : DELETE /api/sales
 */

const deleteItem = async (req,res)=>{
    try {
        const data = await sales.findByIdAndDelete(req.params.id);
        if (!data){
            res.status(404).json({message : "item not found"});
        };
        res.status(200).json({message:"item removed"})
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};



module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
};