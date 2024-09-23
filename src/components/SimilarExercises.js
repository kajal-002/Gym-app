import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
import ExerciseCard from './ExerciseCard'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt :{ lg : '100px', xs : '0'}}} p="20px">
    <Typography variant='h3' mb = {8}>
      Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}> Target Muscle </span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: '2',position:'relative'}} mb="20px" >
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography variant='h3' mb = {8} mt={6}>
    Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}> Equipment </span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: '2',position:'relative'}} mb="20px">
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
    </Box>
  )
}

export default SimilarExercises
