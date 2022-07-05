import useSiteSlogan from "@/hooks/use-site-slogan"

function LayoutFooterSlogan() {
  const slogan = useSiteSlogan()

  return <p>{slogan}</p>
}

export default LayoutFooterSlogan
