export async function getServerSideProps(context: any) {
  return {
    redirect: {
      destination:
        "https://chatgpt.com/g/g-675832d93a64819186f6c60a76ca52db-noaiber",
      permanent: true,
    },
  };
}

export default function RedirectPage() {
  return null;
}
