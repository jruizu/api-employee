const request = require('supertest')
const app = require('../src/app')
const {v4} = require('uuid') 
const uuid = v4;


/**
 * Testing endpoint api employee
 */
//expect 200
describe("GET /api/employee/all", ()=>{
    it('respond with json containing list all employees', done=>{
        request(app)
        .get('/api/employee/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    })
})
//expect 200
describe("POST /api/employee/ceate", ()=>{
    it('respond with json containing message sucess saved', done=>{
        request(app)
        .post('/api/employee/create')
        .send({
            name:'Jose Ruiz', 
            identification:uuid(), 
            _function:'Desarrollador',
            boss_id:null,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(error=>{
            if(error) return done(error)
            else done();
        })
        
    })
})

//expect 400
describe("POST /api/employee/ceate", ()=>{
    it('respond with json containing message request  is empty', done=>{
        request(app)
        .post('/api/employee/create')
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end(error=>{
            if(error) return done(error)
            else done();
        })
        
    })
})

//expect 200
describe("PUT /api/employee/update/:id", ()=>{
    it('respond with json containing message update success', done=>{
        request(app)
        .put('/api/employee/update/1')
        .send({
            name:'Jose Ruiz', 
            identification:'12345', 
            _function:'Desarrollador',
            boss_id:null,
            deletedAt:null,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(error=>{
            if(error) return done(error)
            else done();
        })
        
    })
})

//expect 200
describe("DELETE /api/employee/delete/:id", ()=>{
    it('respond with json containing message update success', done=>{
        request(app)
        .delete('/api/employee/delete/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(error=>{
            if(error) return done(error)
            else done();
        })
        
    })
})







