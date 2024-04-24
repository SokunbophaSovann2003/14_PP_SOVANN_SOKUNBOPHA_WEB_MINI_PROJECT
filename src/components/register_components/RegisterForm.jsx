
import React from 'react'
import Image from 'next/image'
import { handleRegister } from '@/actions/authAction';

function RegisterForm() {
	// const router = useRouter();
  // defind handle login
	// async function handleRegister(userInfo){
	// 	// define structure object
	// 	const newUserInfo = {
	// 		firstname: userInfo.get("firstName"),
	// 		lastname: userInfo.get("lastName"),
	// 		gender: userInfo.get("gender"),
	// 		email: userInfo.get("email"),
	// 		password: userInfo.get("password")
	// 	}
	// 	console.log("this is data : ", newUserInfo);
	// 	// calling next auth service and passing "newUserInfo"
	// 	const res = await registerService(newUserInfo);
	// 	// console.log("response : ", res);
	// 	// if (res.status == 200) {
	// 	// 	// router.push("/board")
	// 	// }
	// }

	return (
		<div className="w-full mr-20 lg:w-7/12 bg-white dark:bg-gray-700 rounded-lg lg:rounded-l-none">
			<div className="mb-10 flex justify-between">
				<Image src={"/assets/icons/logo.svg"} width={200} height={100} alt='Logo'/>
			</div>
			<form action={handleRegister} className="pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
				<div className="mb-4 md:flex md:justify-between">
					<div className="mb-4 md:mr-2 md:mb-0 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="firstName">
							First Name
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="firstName" name="firstName" type="text" placeholder="Enter your name.." />
					</div>
					<div className="md:ml-2 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="lastName">
							Last Name
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="lastName" name="lastName" type="text" placeholder="Enter your name.." />
					</div>
				</div>
				<div className="mb-4 md:flex md:justify-between">
					<div className="mb-4 md:mr-2 md:mb-0 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="firstName">
							Email :
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="email" name="email" type="text" placeholder="info@xyz.com" />
					</div>
					<div className="md:ml-2 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="lastName">
							Gender :
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="gender" name="gender" type="text" placeholder="+91-9858 58999" />
					</div>
				</div>
				<div className="mb-4 md:flex md:justify-between">
					<div className="mb-4 md:mr-2 md:mb-0 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="firstName">
							Password :
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="password" name="password" type="password" placeholder="xxxxxxxxxxx" />
					</div>
					<div className="md:ml-2 w-[45%]">
						<label className="block mb-2 text-sm font-thin text-slate-800 dark:text-white" for="lastName">
							Confirm Password
						</label>
						<input className="w-full px-3 py-2 text-sm leading-tight text-slate-800 dark:text-white bg-slate-200 rounded appearance-none focus:outline-none focus:shadow-outline placeholder-slate-600" id="confirmPassword" name="confirmPassword" type="password" placeholder="xxxxxxxxxxxx" />
					</div>
				</div>
				<div className="mt-6">
					<button type="submit" className="px-4 py-2 font-thin text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline placeholder-slate-600">Sign Up</button>
				</div>
			</form>
		</div>
	)
}

export default RegisterForm