import { SignIn, SignInButton } from '@clerk/nextjs'

export default function Page() {
  return (
  <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <SignIn/>
    </div>
  
    <img
      alt=""
      src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    />
  </section>)
}