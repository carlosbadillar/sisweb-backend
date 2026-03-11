import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/productModel";

export const getAllProducts: RequestHandler = (req, res) => {
    Product.findAll()
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

export const createProduct: RequestHandler = (req, res) => {
    Product.create({ ...req.body })
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

export const getProductById: RequestHandler = (req, res) => {
    const id = String(req.params.id); // Forzamos a string para evitar el error de TS
    Product.findByPk(id)
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

export const modifyProduct: RequestHandler = (req, res) => {
    Product.update({ ...req.body }, { where: { id: req.params.id } })
        .then(() => res.status(200).json({ status: "success", message: "Product updated" }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

export const deleteProduct: RequestHandler = (req, res) => {
    const id = req.body.id;
    Product.destroy({ where: { id } })
        .then(() => res.status(200).json({ status: "success", message: "Product deleted" }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};