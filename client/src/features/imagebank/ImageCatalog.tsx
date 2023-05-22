import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "../../app/models/image";
import { Card, Table } from "react-bootstrap";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryCard from "../categories/Card";

interface Props {
    images: Image[];
}

export default function ImageCatalogPage({images}: Props) {
 
    return (
        <>
            <List>
                {images.map(image => (
                    <ListItem key={image.id}>
                        <ListItemAvatar>
                            <Avatar src="#" />
                        </ListItemAvatar>
                        <ListItemText>
                            {image.imgName} {image.description}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <CategoryCard title="test" />
            <CategoryCard title="test" />
            <CategoryCard title="test" />
            <CategoryCard title="test" />
            <Link to="/image-sub-catalog">Go to images</Link>
        </>
    
    )
}