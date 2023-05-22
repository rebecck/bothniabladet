import { useEffect, useState } from "react";
import { Category } from "../../app/models/category";
import agent from "../../app/api/agent";
import CategoryCard from "./Card";
import { Grid } from "@mui/material";

export default function CategoryPage() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        agent.Category.list().then(categories => setCategories(categories))
    }, [])

    return (
        <Grid container spacing={4}>
            {categories.map(category => (
                <li key={category.id}>{category.name}</li>
            ))}
        </Grid>
       
    )
}