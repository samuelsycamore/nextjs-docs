export default {
  repository: 'https://github.com/samuelsycamore',
  titleSuffix: ' – Sam Sycamore',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Sam Sycamore</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Software Engineer & Technical Writer
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="apple-touch-icon" sizes="180x180" href="/sun-outline.svg"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/sun-outline.svg"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/sun-outline.svg"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/sun-outline.svg"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/sun-outline.svg"/>
      <meta name="msapplication-TileImage" content="/sun-outline.svg"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>
}
