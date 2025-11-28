{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const mongoose = require('mongoose');\
const cors = require('cors');\
require('dotenv').config();\
\
const app = express();\
const PORT = process.env.PORT || 5000;\
\
// Middleware\
app.use(cors());\
app.use(express.json());\
\
// Routes\
const taskRoutes = require('./routes/taskRoutes');\
const authRoutes = require('./routes/authRoutes');\
\
app.use('/api/tasks', taskRoutes);\
app.use('/api/auth', authRoutes);\
\
// MongoDB Connection\
mongoose.connect(process.env.MONGO_URI, \{\
    useNewUrlParser: true,\
    useUnifiedTopology: true,\
\})\
.then(() => console.log('MongoDB connected'))\
.catch(err => console.log(err));\
\
app.listen(PORT, () => console.log(`Server running on port $\{PORT\}`));}