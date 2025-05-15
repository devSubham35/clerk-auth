// import { SignIn } from '@clerk/nextjs'
'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

const SignInPage = () => {
  return (
    <div className='emerald-200'>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white w-96 rounded-2xl py-10 px-8 shadow-sm border space-y-5"
        >
          <div className="grid grid-cols-1 gap-2">
            <Clerk.Connection
              name="google"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              Google
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              Facebook
            </Clerk.Connection>
            <Clerk.Connection
              name="github"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              GitHub
            </Clerk.Connection>
          </div>

          <div className='space-y-4'>
            <Clerk.Field name="identifier">
              {/* <Clerk.Label className="text-sm font-medium">Email</Clerk.Label> */}
              <Clerk.Input asChild>
                <input
                  placeholder='Enter yout email'
                  className="w-full border rounded-md py-2.5 px-2.5 outline-none"
                />
              </Clerk.Input>
              <Clerk.FieldError className="block text-red-500 text-sm" />
            </Clerk.Field>

            <SignIn.Action submit asChild>
              <button className='w-full py-2.5 rounded-lg bg-black text-white'>Continue</button>
            </SignIn.Action>
          </div>


        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

export default SignInPage
