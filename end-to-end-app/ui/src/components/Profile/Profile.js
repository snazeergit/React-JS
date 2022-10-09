import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Input } from '../../common/Input/Input'
import {Select} from '../../common/Select/Select'
import {TextArea} from '../../common/TextArea/TextArea'
import {regFormValidations} from '../../validations/regFormValidations'
import {ServerCall} from '../../shared/ServerCall'
import { toast } from 'react-toastify';
import {appStore} from '../../store/appStore'
import { Modal } from '../../common/Modal/Modal'
const inputValues=[
  {
    label:'Username',
    tag:'input',
    type:'text',
    name:"uid",
    val:'',
    errorMsg:'',
    isShowError:false
 },
 {
  label:'Password',
  tag:'input',
  type:'text',
  name:"pwd",
  val:'',
  errorMsg:'',
  isShowError:false
},
{
  label:'Phone',
  tag:'input',
  type:'number',
  name:"phone",
  val:'',
  errorMsg:'',
  isShowError:false
},
{
  label:'Gender',
  type:'radio',
  tag:'input',
  name:"gender",
  val:'',
  values:['M','F'],
  options:['Male','Female'],
  errorMsg:'',
  isShowError:false
},
{
  label:'Hobbies',
  type:'checkbox',
  tag:'input',
  name:"hobbies",
  val:'',
  values:['CRIC','FB','HOC'],
  options:['Cricket','FootBall','Hockey'],
  errorMsg:'',
  isShowError:false
},
{
  label:'Country',
  tag:'select',
  name:"country",
  val:'',
  values:['Ind','Pak','Chi'],
  options:['India','Pakistan','China'],
  errorMsg:'',
  isShowError:false
},
{
  label:'Address',
  tag:'textarea',
  name:"address",
  val:'',
  errorMsg:'',
  isShowError:false
},
]
export const Profile = () => {
  const [template,setTemplate]=useState('')
  const [isShowModal, setIsShowModal]=useState(false)
  const [modalText,setModalText]=useState('')
  useEffect(()=>{
    fnPrepareTemplate()
    appStore.dispatch({type:'LOADER',payload:true})
    ServerCall.sendGet(`dbops/get-stu-id?id=${localStorage.id}`)
    .then((res)=>{
      appStore.dispatch({type:'LOADER',payload:false})
      let stdInfo=res.data;
      inputValues.forEach((obj)=>{
          obj.val=stdInfo[obj.name]
      })
      fnPrepareTemplate()
    })
    .catch((res)=>{
      appStore.dispatch({type:'LOADER',payload:false})
      console.log(res)
    })
  },[])
  const fnPrepareTemplate=()=>{
    let inputControlsArr=inputValues.map((obj, index)=>{
      switch(obj.tag){
        case 'input':
         return <Input  key={index} data={{...obj,fnChange}}  />
        case 'select':
          return <Select key={index} data={{...obj,fnChange}}  />
        case 'textarea':
          return <TextArea key={index} data={{...obj,fnChange}}  />
      }
   
 })
 setTemplate(inputControlsArr)
  }


  const fnChange=(eve)=>{
      const {name,value,type,checked,id}=eve.target
      let inputObj= inputValues.find((obj)=>{
        return obj.name==name
      })
        if(type=='checkbox'){
         
          let selHobbies=[] 
          if(inputObj.val){
            selHobbies=inputObj.val.split(',')
          }
          if(checked){
            selHobbies.push(id)
          }else{
            selHobbies.splice(selHobbies.indexOf(id),1)
          }
          inputObj.val=selHobbies.join();
        }else{
        inputObj.val=value;
        }
        inputObj.errorMsg='';
        regFormValidations(inputObj)
        fnPrepareTemplate()
        // inputObj.isShowError=value ? false : true
  }
  const fnTerimnate=()=>{
         setIsShowModal(true)
         setModalText('R U sure...')
  }
  const fnUpdate=()=>{
      let isFormValid=true;
      let dataObj={}
      inputValues.forEach((inputObj)=>{
        const {name,val}=inputObj
        dataObj[name]=val
        regFormValidations(inputObj)
        if(inputObj.errorMsg){
          isFormValid=false
        }
      })
      fnPrepareTemplate()
      if(!isFormValid)return
      appStore.dispatch({type:'LOADER',payload:true})
      ServerCall.sendPut(`dbops/update-stu/${localStorage.id}`,{payload:dataObj})
      .then((res)=>{
        appStore.dispatch({type:'LOADER',payload:false})
        const {acknowledged,modifiedCount} =res.data
        if(acknowledged && modifiedCount){
          toast.success('Successfully Updated')
        }else{
          toast.info('Not Updated, try again.')
        }
      })
      .catch((res)=>{
          appStore.dispatch({type:'LOADER',payload:false})
          toast.error('Something went wrong')
      })
      
  }
  const fnDelete=async()=>{
    appStore.dispatch({type:'LOADER',payload:true})
    const res=await ServerCall.sendDelete(`dbops/delete-stu/${localStorage.id}`)
    appStore.dispatch({type:'LOADER',payload:false})
    if(res.status==200){
      const {acknowledged,deletedCount} =res.data
      if(acknowledged && deletedCount){
        toast.success('Your accound terminated successfully')
        localStorage.clear();
        appStore.dispatch({type:'AUTH',payload:false})
      }else{
        toast.info('Account not terminated,try again')
      }
    }else{
      toast.error('Something went wrong')
    }
  }
  const handModalResponse=(bool)=>{
        setIsShowModal(false)
        if(bool){
          fnDelete()
        }
  }
  return (
    <div className='container-fluid'>
          <h1 className='text-center mt-3 mb-4'>Profile Page</h1>
           {template}
           <div className='row'>
         <div className='offset-sm-5 col-sm-7 text-start'>
            <button onClick={fnUpdate} className='btn btn-primary me-3'>Update</button>
            <button onClick={fnTerimnate} className='btn btn-primary me-3'>Terminate</button>
         </div>
     </div>
       {isShowModal && <Modal text={modalText} handModalResponse={handModalResponse} />}
    </div>
  )
}


