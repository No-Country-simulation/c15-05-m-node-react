import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const ButtonBack = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); 
    };

  return (
    <Button variant="text"  startIcon={<ArrowBackIcon />} onClick={handleGoBack}            
        sx={{
            transition: 'transform 0.2s ease-in-out', // Transición suave
            '&:hover': {
                transform: 'scale(1.1)', // Aumentar la escala al pasar el mouse
            },
        }}
    >
      Volver
    </Button>
  );
};

export default ButtonBack;