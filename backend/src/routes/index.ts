import { Router } from 'express'

import lookupRoutes from './lookupRoutes'
import servicesRoutes from './servicesRoutes'
import vehicleRoutes from './vehicleRoutes'
import postcodeRoutes from './postcodeRoutes'
import dvlaRoutes from './dvlaRoutes'
import healthRoutes from './health'

const router = Router()

router.use('/lookup', lookupRoutes)
router.use('/services', servicesRoutes)
router.use('/vehicles', vehicleRoutes)
router.use('/postcode', postcodeRoutes)
router.use('/dvla', dvlaRoutes)
router.use('/health', healthRoutes)

export default router
