import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/get").then((response) => {
            setBlogs(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    })

    const delBlog = (id) => {
        console.log(id)
        axios.delete("http://localhost:3001/remove/" + id).then((res) => {
            alert(res.data.message)
            window.location.reload()
        })
            .catch((error) => console.log(error))
    }

    const updBlog = (val) => {
        navigate("/add", { state: { val } })
    }
    return (
        <Box flex={1}
            p={20}
            overflow="auto"
            sx={{
                marginTop: "16px",
            }} >
            <Grid container spacing={4} alignItems={'flex-start'} >
                {blogs.map((val) => (
                    <Grid item xs={12} sm={6} md={4} >
                        <Card
                            sx={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%"
                            }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 200, objectFit: 'cover' }}
                                alt="Blog Image"
                                image={val.img_url}
                                title={val.title} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography color={"grey"}>
                                    {val.title}
                                </Typography>
                                <Typography variant="h6"  color="black" sx={{ flexGrow: 1 }}>
                                    {val.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="secondary"
                                    onClick={() => { delBlog(val._id) }}>delete</Button>
                                <Button variant="contained" color="secondary"
                                    onClick={() => { updBlog(val) }}>update</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Home