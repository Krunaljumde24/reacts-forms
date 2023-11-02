import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

  let handleSubmitBtnClick = (data) => {
    console.log(data);

  }

  return (
    <>
      <h2>React Form Validation | react-hook-form</h2>
      <div className='myForm'>
        <form onSubmit={handleSubmit(handleSubmitBtnClick)}>
          <label htmlFor="firstName">First Name</label> <br />
          <input
            id='firstName'
            {...register("firstName", { required: true })}
          /> <br /> <br />
          {errors.firstName && <p className='errorMessage'>First name is required.</p>}

          <label htmlFor="lastName">Last Name</label> <br />
          <input id='lastName' {...register("lastName", {required: true})} /> <br /> <br />
          {errors.lastName && <p className='errorMessage'>Last name is required.</p>}

          <label htmlFor="email">Email</label> <br />
          <input id='email' {...register("email", {required: true})} /> <br /> <br />
          {errors.email && <p className='errorMessage'>Email is required.</p>}

          <label htmlFor="mobileNum">Mobile Number</label> <br />
          <input id='mobileNum' {...register("mobileNum", {required: true})} /> <br />
          {errors.mobileNum && <p className='errorMessage'>Mobile number is required.</p>}
          <br />
          <input className='btn btn-sm btn-info' type="submit" />
        </form>
      </div>
    </>
  )
}

export default App
