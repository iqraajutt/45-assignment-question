function create_car(manufacturer: string, model: string, ...options:string[])
{
    let car:any = {
        manufacturer: manufacturer,
        model: model,
    
    }
    options.forEach(option => {
        let [key, value] = option.split(':')
        car [key.trim()] = value.trim()

    })
    return car;
}
let myCar = create_car("Toyota", "Carolla","Color:Blue","Sunroof:true")
console.log(myCar);
