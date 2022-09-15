//import express from 'express'
import { Router } from 'express'
import Users from '../users.js'

const router = Router ();

function crearRouterUsuarios(apiUsuarios) {
    const router = express.Router()
    router.post('/popular', async (req, res, next) => { //async-promesas se utiliza para base de datos y filesystem
        try {
            //en clase: let users = await aserService.getAll ();
            //en clase: res.send ({status: "success", payload:users})
            res.json(await apiUsuarios.popular(req.query.cant))
        } catch (err) {
            next(err)
            //en clase: res.status(500).send ({status: "error", error: "No se puede ir al usuario"})
        }
    })

//en clase
router.get ('/populate', (req,res) => {
    try{
        let result =await usersService.populate (req, res);
        res.send ({status: "success", payload: result}); 
    }catch(err){
        res.status (500).send({status: 'error', error: "No se puede ir al populate users"})
    }
})
/*
    router.get('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.buscar())
        } catch (err) {
            next(err)
        }
    })
    router.get('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.buscar(req.params.id))
        } catch (err) {
            next(err)
        }
    })
    router.post('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.agregar(req.body))
        } catch (err) {
            next(err)
        }
    })
    router.put('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.actualizar(req.params.id, req.body))
        } catch (err) {
            next(err)
        }
    })
    router.delete('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.borrar(req.params.id))
        } catch (err) {
            next(err)
        }
    })

    router.use((err, req, res, next) => {
        if (err.message === 'usuario no encontrado') {
            res.status(404)
        } else {
            res.status(500)
        }
        res.json({ message: err.message })
    })

    return router
}
*/
}

export {
    crearRouterUsuarios
}