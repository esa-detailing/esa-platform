import { Router } from 'express'
import { createSpecialRequest, listSpecialRequests } from '../controllers/specialController'

const router = Router()

router.post('/', createSpecialRequest)
router.get('/', listSpecialRequests)

export default router
