
/*
==================================================== Object ===========================================================================
    -Summary: Object trong JavaScript (đối tượng trong JavaScript) là tập hợp của các cặp key-value. Và property là tên gọi của mỗi cặp key-value.
        Giá trị (value) của một property có thể thuộc bất kỳ kiểu dữ liệu như: string, number, object, function,….
        Khi giá trị của một property là function thì tên gọi của nó là method.
        + khởi tạo Object: 
            ++ Sử dụng object literal
            ++ Sử dụng object constructor function: phụ thuộc vào kế thừa prototype nhằm giúp các chức năng trở nên hữu dụng hơn. 
            Mấu chốt của những dạng này là có thể thực thể hóa(instantiation) và được kế thừa (inherited)
            ++ Thuộc tính riêng ( own property) và thuộc tính kế thừa (inherited property): => Sử dụng hasOwnProperty để kiểm tra phải thuộc tính riêng hay không
        + Object constructor: là một phương thức đặc biệt dùng để khởi tạo 1 object và được tạo trong class
        + Object prototype: Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác
                            Dùng khi Thêm một thuộc tính và phương thức bên ngoài constructor.
        + "This": đề cập đến đối tượng mà nó thuộc về
            Đặc tính: 
                ++ Trong phương thức: This tham chiếu đối tượng truy cập phương thức( đối tượng trước dấu .)
                ++ Ngoài phương thức: this tham chiếu đến đối tượng ngoài global.
            Lưu ý: 
                ++ This trong hàm tạo sẽ đại diện cho đối tượng sẽ được tạo
                ++ This trong hàm tạo là underfined khi ở stric  mode
                ++ Các phương thức blind(), call(), apply() có thể tham chiếu đến đối tượng khác.         
                
*/
        // var User = function( firstName, lastName ){
        //     this.firstName = firstName;
        //     this.lastName = lastName;
            
        //     this.getName = function(){
        //         return `${this.firstName} ${this.lastName}`
        //     }
        // }
        // // Object constructor
        // var userTran = new User('Huyen','Tran');
        // var userA = new User('Tran','A');
        // userTran.tuoi= 22;
        // userA.gioiTinh = "Nam";
        // console.log("Object constructor:");
        // console.log(userTran);
        // console.log(userA);

        // // Object prototype
        // console.log("Object prototype:");
        // User.prototype.statusAccount = "Inactive";
        // User.prototype.getStatusAccount = function(){
        //     return this.statusAccount;
        // }
        // console.log(userTran.getStatusAccount());

    /*----------------- Ví dụ về This trong phương thức---------------------- */
        //'use strict';
        // function Car(name, color, weight){
        //     this.name = name;
        //     this.color = color;
        //     this.weight = weight;   
        // }
        // Car.prototype.run = function(){
        //     //context

        //     // console.log(this);

        //     /* ----- This trong hàm không phải là phương thức: thì object là windows ---*/
        //     // function test(){
        //     /* ----- Arrow function không có context -> không có this -> lấy this ở hàm gần nhất -> this: mercedesS450  ---*/
        //     const test = () => {
        //         console.log(this)
        //     }
        //     test();


        // }
        // const mercedesS450 = new Car('Mercedes S450', 'black', 1200);
        // const porche = new Car('Porsche', 'yellow',1300); 
        // console.log(mercedesS450.run()) // This chính là mercedesS450
        // console.log(porche.run()) // This chính là porche

    /*----------------- Ví dụ về This ngoài phương thức---------------------- */
        // console.log(this); // trả về object là windows ( chạy file html -> console để tháy kết quả)

    /*----------------- Ví dụ về Add và delete Properties ---------------------- */
        // const person = {
        //     firstname: "John",
        //     lastname: "Doe",
        //     age: 50,
        //     eyecolor: "blue"
        // };
        // person.nationality = "English";
        // delete person["age"];
        // console.log(person); 

    /*----------------- Ví dụ về các Object lồng nhau ---------------------- */
        // const myObj = {
        //     name: "John",
        //     age: 30,
        //     name: "Jane",
        //         cars: {
        //             car1: "Ford",
        //             car2: "BMW",
        //             car3: "Fiat"
        //         }
        // }
        // // Cú pháp truy cập các thuộc tính JavaScript:
        // console.log(myObj.cars.car2); //objectName.property
        // console.log(myObj.cars["car2"]); 
        // console.log(myObj["cars"]["car2"]); //objectName["property"]
        // let p1 = "cars";
        // let p2 = "car2";
        // console.log(myObj.cars.car2);
        // let p3 = "name";
        // console.log(myObj[p3])
        // let p4 = "cars.car2";
        // console.log(myObj[p4]); //objectName[expression]

    /*----------------- Duplicate Object ---------------------- 
        - Khi duplicate một object lên, một bản sao của object đó sẽ được tạo ra. Bản sao này sẽ có tất cả các thuộc tính và giá trị giống hệt với object gốc. 
        Tuy nhiên, bản sao này sẽ là một đối tượng khác với object gốc. Điều này có nghĩa là các thay đổi đối với bản sao sẽ không ảnh hưởng đến object gốc và ngược lại.
        - (shallow copy) khi sử dụng Object.assign() hoặc spread operator (...), thay đổi giá trị trong bản sao (duplicate) sẽ tác động đến đối tượng gốc (object), và ngược lại, 
            thay đổi giá trị trong đối tượng gốc cũng sẽ tác động đến bản sao nông (shallow copy). Điều này xảy ra vì shallow copy chỉ sao chép tham chiếu đến đối tượng, không sao chép đối tượng gốc.
        - Khi sử dụng (deep copy) như JSON.parse(JSON.stringify()), thay đổi giá trị trong bản sao sẽ không làm thay đổi giá trị trong đối tượng gốc và ngược lại. 
            (deep copy) tạo ra một bản sao hoàn toàn độc lập của đối tượng, không chia sẻ tham chiếu với đối tượng gốc.
       
    */
        // const object = {
        //     name: "John Doe",
        //     age: 30,
        //     address: {
        //         street: "123 Main Street",
        //         city: "San Francisco",
        //         state: "CA",
        //     },
        // };
        
        // /* ------------------ Tạo một bản sao dùng Spread của object--------------- */
        // const duplicate = { ...object };

        // // Thay đổi giá trị của thuộc tính `address.street` của object
        // // object.address.street = "789 Elm Street";

        // // Thay đổi giá trị của thuộc tính `address.street` của duplicate
        // duplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); // "789 Elm Street"
        // console.log("duplicate.address.street:", duplicate.address.street); // "456 Elm Street"

        
        // // Tạo một bản sao shallow của object
        // const duplicate = Object.assign({}, object);
        
        // // Thay đổi giá trị của thuộc tính `address.street` của object
        // // object.address.street = "789 Elm Street";
        // //Thay đổi giá trị của thuộc tính `address.street` của duplicate
        // duplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); 
        // console.log("duplicate.address.street:", duplicate.address.street); 
        
        // /* ------------------ Tạo một bản sao Deep của object--------------- */
        // const deepDuplicate = JSON.parse(JSON.stringify(object));

        
        // object.address.street = "789 Oak Street";
        // // deepDuplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); 
        // console.log("deepDuplicate.address.street:", deepDuplicate.address.street); 
        

        

    
    
    /*----------------- Ví dụ về Array lồng với Object ---------------------- */
        // let x = "";
        // const myObj1 = {
        // name: "John",
        // age: 30,
        // cars: [
        //     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        //     {name:"BMW", models:["320", "X3", "X5"]},
        //     {name:"Fiat", models:["500", "Panda"]}
        // ]
        // }
        // for (let i in myObj1.cars) {
        //     x += "Name: " + myObj1.cars[i].name + " ";
        //     for (let j in myObj1.cars[i].models) {
        //         x += myObj1.cars[i].models[j] +" , "  ;
        //     }
        // }
        // console.log(x);
/*  
==================================================== Object literals ===========================================================================
    -Sumary: Object literals là một cú pháp trong JavaScript để tạo đối tượng (object) trực tiếp và định nghĩa các thuộc tính và phương thức của đối tượng đó. 
    Đây là một cách tiện lợi để tạo đối tượng mà không cần sử dụng lớp (class) hoặc constructor function.
    - Syntax:
        const obj = {
            property1: value1,
            property2: value2,
            method1: function() {
                // code của method1
            },
            method2() {
                // code của method2
            }
        };
        Trong đó:
            property1 và property2 là các thuộc tính của đối tượng, và value1 và value2 là giá trị của các thuộc tính đó.
            method1 và method2 là các phương thức của đối tượng. method1 sử dụng cú pháp function expression, trong khi method2 sử dụng cú pháp function shorthand.
*/


    // const person = {
    //     name: "John",
    //     age: 30,
    //     sayHello: function() {
    //         console.log("Hello, my name is " + this.name);
    //     }
    // };
    // console.log(person.name); // "John"
    // console.log(person.age); // 30
    // person.sayHello(); // "Hello, my name is John"

/*
==================================================== JSON ===========================================================================
    - Sumary: JSON (JavaScript Object Notation) là một định dạng dữ liệu dựa trên văn bản (text-based) được sử dụng để truyền dữ liệu giữa các ứng dụng. 
    Nó được lấy cảm hứng từ cú pháp đối tượng (object) trong JavaScript, nhưng JSON có thể được sử dụng trong nhiều ngôn ngữ lập trình khác nhau.
    - Data type:  
        + Strings: {"name":"John"}
        + Numbers: {"age":30}
        + Objects: { "employee":{"name":"John", "age":30, "city":"New York"}}
        + Arrays: { "employees":["John", "Anna", "Peter"]}
        + Booleans: {"sale":true}
        + null: {"middlename":null}
    - Cấu trúc: 
        + Key & Value đơn giản: 
            {
                "name": "John Doe"
            }
        + Key & Value phức tạp:
            {
            "name": "John Doe",
            "age": 30,
            "address": {
                "street": "123 Main Street",
                "city": "Anytown",
                "state": "CA",
                "zip": "12345"
                }
            }
        + Mảng Json:
            [
                {
                    "name": "John Doe",
                    "age": 30
                },
                {
                    "name": "Jane Doe",
                    "age": 25
                }
            ]
    - JSON parse:
        Converting a JavaScript Object to a JSON Text:
            const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
            const obj = JSON.parse(text);
    - JSON stringify:
        converts a JavaScript object into a JSON string: 
            const obj = { name: "John", age: 25 };
            const jsonString = JSON.stringify(obj);
*/
    // Vd lấy data từ json đơn giản
        // const myObj = {name:"John", age:30, city:"New York"};
        // myObj["name"] = "Gilbert";
        // console.log(myObj.name);

    /*----------------- Ví dụ Converting a JavaScript Object to a JSON Text ---------------------- */
        // const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
        // const obj = JSON.parse(text);
        // obj.birth = new Date(obj.birth);
        // console.log(obj.name + ", " + obj.birth ); // "John"

    /*----------------- Ví dụ converts a JavaScript object into a JSON string ---------------------- */
        
        // const obj1 = { name: "John", age: 25 };
        // const jsonString = JSON.stringify(obj1);
        // console.log(jsonString);

        // /*----------------- ghi một chuỗi JSON vào một file. ---------------------- */
        // //npm install fs
        // import fs from 'fs';
        // fs.writeFile("fileObj1.json", jsonString, (err) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("JSON đã được ghi thành công");
        //     }
        // });
    
    
/*
==========================================  Module Export  ============================================================= 
    - Sumary: 
        + Về chức năng, export và exports đều được sử dụng để xuất các thành phần từ một module.
        + Sự khác biệt thực sự giữa export và exports là cú pháp và cách sử dụng của chúng trong hai hệ thống module khác nhau.
        + Nếu bạn đang sử dụng JavaScript module (.mjs hoặc .js), hãy sử dụng export và import. Ngược lại, nếu bạn đang sử dụng CommonJS module format(.cjs), hãy sử dụng exports và require().
*/

        // Import named exports
        import { add, subtract } from "./forLoop.js";

        // Import default export
        import multiply from "./forLoop.js";

        console.log(add(5, 3)); // Kết quả: 8
        console.log(subtract(5, 3)); // Kết quả: 2
        console.log(multiply(5, 3)); // Kết quả: 15

/** =================================== Sử dụng Dependency bằng NPM trong NodeJs========================================= 
    Khi bạn chạy ứng dụng của mình, npm sẽ tự động tải các thư viện phụ thuộc cần thiết vào môi trường.
    Ví dụ sử dụng thư viện axios
        Thực hiện các bước sau:
        1) Cài đặt phụ thuộc axios từ npm bằng lệnh sau:
            cách 1: npm install axios
            cách 2:
                - Thêm phụ thuộc "axios" với phiên bản "^0.21.4" vào phần "dependencies" trong file package.json.
                    "dependencies": {
                        "axios": "^0.21.4"
                    }
                - Trong thư mục dự án, chạy lệnh sau để cài đặt phụ thuộc: npm install
        2) Thêm đoạn mã sau vào file:
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    const data = response.data.slice(0, 5);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
*/
        // import axios from 'axios';

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => {
        //     const data = response.data.slice(0, 5);
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.error(error);
        // });

/** =================================== Phân biệt Dependency , devDependency, peerDependency =========================================
    1) Dependency:
        - Sumary: là các thư viện mà ứng dụng cần để chạy. Chúng được cài đặt cùng với ứng dụng và có thể được sử dụng trong ứng dụng.	
        - Vị trí: Được chỉ định trong file package.json trong mục dependencies
        - Các step:
            Để sử dụng dependency, bạn cần chỉ định chúng trong file package.json của ứng dụng trong mục dependencies. Ví dụ:
                {
                    "name": "my-app",
                    "version": "1.0.0",
                    "dependencies": {
                        "react": "^17.0.2",
                        "axios": "^0.26.1"
                    }
                }
            Sau đó, bạn có thể cài đặt dependency bằng lệnh: npm install
        - ví dụ về cách sử dụng từng loại dependency:
            React là một thư viện cần thiết để tạo giao diện người dùng cho ứng dụng web. Do đó, React là một dependency.
                -> Ứng dụng sẽ không thể chạy nếu bạn không cài đặt react
            Axios là một thư viện cần thiết để thực hiện các yêu cầu HTTP. Do đó, Axios là một dependency.
                -> Ứng dụng của bạn sẽ không thể thực hiện các yêu cầu HTTP nếu bạn không cài đặt axios.

    2) devDependency:
        - Sumary: à các thư viện mà chỉ cần thiết cho quá trình phát triển ứng dụng. Chúng không được cài đặt cùng với ứng dụng, nhưng có thể được sử dụng trong quá trình phát triển.
        - Vị trí: Được chỉ định trong file package.json trong mục devDependencies
        - Các step: 
            Để sử dụng devdependency, bạn cần chỉ định chúng trong file package.json của ứng dụng trong mục devDependencies. Ví dụ:
                {
                    "name": "my-app",
                    "version": "1.0.0",
                    "devDependencies": {
                        "eslint": "^8.11.0",
                        "jest": "^28.1.1"
                    }
                }
            Sau đó, bạn có thể cài đặt devdependency bằng lệnh: npm install --save-dev
        - ví dụ về cách sử dụng từng loại dependency:
            ESLint là một công cụ kiểm tra mã giúp đảm bảo mã của bạn được viết theo các hướng dẫn nhất định. ESLint không cần thiết để chạy ứng dụng, nhưng nó hữu ích cho quá trình phát triển. Do đó, ESLint là một devdependency.
                -> Ứng dụng của bạn sẽ vẫn có thể chạy ngay cả khi bạn không cài đặt eslint. 
                Tuy nhiên, bạn sẽ không thể sử dụng ESLint để kiểm tra mã của mình nếu bạn không cài đặt eslint.
            Jest là một thư viện thử nghiệm giúp bạn kiểm tra ứng dụng của mình. Jest không cần thiết để chạy ứng dụng, nhưng nó hữu ích cho quá trình phát triển. Do đó, Jest là một devdependency.
                -> ứng dụng của bạn sẽ vẫn có thể chạy ngay cả khi bạn không cài đặt jest. 
                Tuy nhiên, bạn sẽ không thể sử dụng Jest để kiểm tra ứng dụng của mình nếu bạn không cài đặt jest.

    3) peerDependency: 
        - Sumary: là các thư viện mà ứng dụng cần để chạy, nhưng chỉ khi môi trường nhất định được yêu cầu. Chúng được cài đặt cùng với ứng dụng, nhưng chỉ khi môi trường nhất định được yêu cầu.
        - Vị trí: Được chỉ định trong file package.json trong mục peerDependencies
        - Các step:
            Để sử dụng peerdependency, bạn cần chỉ định chúng trong file package.json của ứng dụng trong mục peerDependencies. Ví dụ:
                {
                    "name": "my-app",
                    "version": "1.0.0",
                    "dependencies": {
                        "react": "^17.0.2"
                    },
                    "peerDependencies": {
                        "node-sass": "^6.0.0",
                        "webpack": "^5.63.0"
                    }
                }
            Sau đó, bạn có thể cài đặt peerdependency bằng lệnh: npm install
        - ví dụ về cách sử dụng từng loại dependency:
            Node-sass là một thư viện cần thiết để biên dịch các tệp SASS thành CSS. Tuy nhiên, Node-sass chỉ cần thiết nếu bạn sử dụng SASS trong ứng dụng của mình. Do đó, Node-sass là một peerdependency.
                -> Ứng dụng của bạn sẽ vẫn có thể chạy ngay cả khi bạn không cài đặt node-sass. 
                Tuy nhiên, nếu bạn đang sử dụng SASS trong ứng dụng của mình, bạn sẽ cần cài đặt node-sass để biên dịch các tệp SASS thành CSS.
            Webpack là một công cụ đóng gói giúp bạn tạo các ứng dụng web có thể tải xuống được. Webpack chỉ cần thiết nếu bạn muốn tạo ứng dụng web có thể tải xuống được. Do đó, Webpack là một peerdependency.
                -> Ứng dụng của bạn sẽ vẫn có thể chạy ngay cả khi bạn không cài đặt webpack. 
                Tuy nhiên, nếu bạn muốn tạo ứng dụng web có thể tải xuống được, bạn sẽ cần cài đặt webpack để đóng gói ứng dụng của mình.
*/
