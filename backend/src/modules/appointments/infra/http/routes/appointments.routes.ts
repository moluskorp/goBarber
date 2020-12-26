import { Router } from 'express';


import ApoointmentsController from '../controllers/AppointmentsController'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new ApoointmentsController();

appointmentsRouter.use(ensureAuthenticated);

/*appointmentsRouter.get('/', async (request, response) => {
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});*/

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
