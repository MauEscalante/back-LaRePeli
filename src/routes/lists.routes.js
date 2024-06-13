import { Router } from "express";
import { getFavorites, addFavorites, deleteFavorites,getWatchLater,addWatchLater,deleteWatchLater,getWatched,addWatched,deleteWatched } from "../controller/lists.controller.js";

const router = Router();


router.get("/favorites/:userId", getFavorites);
router.post("/favorites/:userId", addFavorites);
router.delete("/favorites/:userId", deleteFavorites);

router.get("/watchLater/:userId", getWatchLater);
router.post("/watchLater/:userId", addWatchLater);
router.delete("/watchLater/:userId", deleteWatchLater);

router.get("/watched/:userId", getWatched);
router.post("/watched/:userId", addWatched);
router.delete("/watched/:userId", deleteWatched);

export default router;