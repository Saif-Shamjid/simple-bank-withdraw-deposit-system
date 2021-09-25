function initDb(){
    let db = localStorage.getItem('everything');
    if(db){
        return JSON.parse(db);
    }
    else{
        createDb();
    }

    let db1 = localStorage.getItem('everything');
    return JSON.parse(db1);

}

function updateDb(db){
    let strDb = JSON.stringify(db);
    localStorage.setItem('everything',strDb);
}

function createDb(){
    let db = {
        Balance: {
            value: 1000
        },
        history: []
    }

    updateDb(db)
}

function getValue(){
    let nameFild = document.getElementById('name');
    let branchName = document.getElementById('branch-name');
    let withdraw = document.getElementById('withdraw');
    let deposit = document.getElementById('deposit');

 
    let nameFildValue = nameFild.value;
    let branchNameValue = branchName.value;
    let withdrawValue = withdraw.value;
    let depositValue = deposit.value;


    nameFild.value = '';
    branchName.value = '';
    withdraw.value = '';
    deposit.value = '';

    return [nameFildValue,branchNameValue,withdrawValue,depositValue]
}

function handleSubmitBtn(){
    let [name,Bname,withdraw,deposit] = getValue();

    console.log(name);
}