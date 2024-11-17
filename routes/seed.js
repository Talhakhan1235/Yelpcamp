const seedDB=require('../seeds/index')

router.get('/', (req,res)=>{
    alert('Seed Start')
    seedDB().then(()=>{
        mongoose.connection.close()
    });
    alert('Seed Complete')
})