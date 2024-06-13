import User from "../models/User.js";

export const getFavorites = async (req, res) => {
  try {
    const { userId } = req.params;
    const favoritas=await User.findById(userId).populate("favorites");
    res.status(200).json(favoritas.favorites);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving favorites" });
  }
};

export const addFavorites = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        user.favorites.push(req.body);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error adding favorites" });
    }
};

export const deleteFavorites = async (req, res) => {
    try {
        const { userId } = req.params;
        const {movieId}=req.body._id;
        const user = await User.findById(userId);
        const index = user.favorites.findIndex((movie) => movie._id === movieId);
        user.favorites.splice(index, 1);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error deleting favorites" });
    }

};

export const getWatchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const favoritas=await User.findById(userId).populate("watchLater");
        res.status(200).json(favoritas.favorites);
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving watchLater" });
      }
};

export const addWatchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        user.watchLater.push(req.body);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error adding watchLater" });
    }
};

export const deleteWatchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const {movieId}=req.body._id;
        const user = await User.findById(userId);
        const index = user.watchLater.findIndex((movie) => movie._id === movieId);
        user.watchLater.splice(index, 1);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error deleting watchLater" });
    }
};

export const getWatched = async (req, res) => {
    try {
        const { userId } = req.params;
        const favoritas=await User.findById(userId).populate("watched");
        res.status(200).json(favoritas.favorites);
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving watched" });
      }
};

export const addWatched = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        user.watched.push(req.body);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error adding watched" });
    }
};

export const deleteWatched = async (req, res) => {
    try {
        const { userId } = req.params;
        const {movieId}=req.body._id;
        const user = await User.findById(userId);
        const index = user.watched.findIndex((movie) => movie._id === movieId);
        user.watched.splice(index, 1);
        const save=await user.save();
        return res.status(200).json({save});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error deleting watched" });
    }
};
