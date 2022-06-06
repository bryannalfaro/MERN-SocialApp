import mongoose from 'mongoose';
import express from 'express';
import PostMessage from "../models/postMessage.js";
//Logic of posts

export const getPosts = async(req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  }
    catch (err) {
      console.log(err);
        res.status(500).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    const post = new PostMessage(req.body);
    try{
        await post.save();
        res.status(200).json(post);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}