type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>Tien Tran</p>
  <p>Welcome to HCM</p>
  </>
}
