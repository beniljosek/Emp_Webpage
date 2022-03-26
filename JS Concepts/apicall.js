// JS code to demonstrate Async&Await

const empInfo = {
    userId : 'user123',
    password : '1234567890'
    };
    
    async function checkDetails(user, pass) {
        const check = new Promise ((resolve,reject) => {
          setTimeout(() => {
            if(user===empInfo.userID && pass===empInfo.password){
                  resolve("success");
          }
          else {
                  reject("fail");
          }
        }, 2000)
      })
      return check;
    }
    
    async function login() {
        try {
          const result = await checkDetails('','');
        console.log("Authentication Success");
      }
      catch(err) {
          console.log("Authentication Failed");
      }
    }
    
    login();