export type OsintTool = { name: string; url: string; description: string };
export type OsintCategory = { name: string; tools: OsintTool[] };

export const osintCategories: OsintCategory[] = [
  {
    name: "Search & Discovery",
    tools: [
      { name: "Google Dorks", url: "https://www.google.com/advanced_search", description: "Advanced search operators" },
      { name: "DuckDuckGo", url: "https://duckduckgo.com", description: "Privacy-focused search" },
      { name: "Yandex", url: "https://yandex.com", description: "Russian search engine, strong image search" },
      { name: "Bing", url: "https://www.bing.com", description: "Microsoft search engine" },
      { name: "Startpage", url: "https://www.startpage.com", description: "Anonymous Google results" },
    ],
  },
  {
    name: "Usernames & People",
    tools: [
      { name: "WhatsMyName", url: "https://whatsmyname.app", description: "Enumerate usernames across hundreds of sites" },
      { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", description: "Hunt usernames across social networks" },
      { name: "Namechk", url: "https://namechk.com", description: "Username & domain availability" },
      { name: "Pipl", url: "https://pipl.com", description: "Identity verification" },
      { name: "ThatsThem", url: "https://thatsthem.com", description: "People search by name, phone, email" },
    ],
  },
  {
    name: "Email & Breach Data",
    tools: [
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", description: "Check email in known breaches" },
      { name: "DeHashed", url: "https://dehashed.com", description: "Searchable breach database" },
      { name: "Hunter.io", url: "https://hunter.io", description: "Find email addresses by domain" },
      { name: "EmailRep", url: "https://emailrep.io", description: "Email reputation & risk" },
      { name: "Holehe", url: "https://github.com/megadose/holehe", description: "Check accounts registered to an email" },
    ],
  },
  {
    name: "Phone Numbers",
    tools: [
      { name: "PhoneInfoga", url: "https://github.com/sundowndev/phoneinfoga", description: "Phone number reconnaissance" },
      { name: "Truecaller", url: "https://www.truecaller.com", description: "Caller ID lookup" },
      { name: "Spy Dialer", url: "https://www.spydialer.com", description: "Reverse phone lookup" },
      { name: "NumLookup", url: "https://www.numlookup.com", description: "Free reverse phone lookup" },
    ],
  },
  {
    name: "Domains & IPs",
    tools: [
      { name: "Shodan", url: "https://www.shodan.io", description: "Search engine for internet-connected devices" },
      { name: "Censys", url: "https://search.censys.io", description: "Internet asset discovery" },
      { name: "VirusTotal", url: "https://www.virustotal.com", description: "URL, file & domain analysis" },
      { name: "crt.sh", url: "https://crt.sh", description: "Certificate transparency search" },
      { name: "SecurityTrails", url: "https://securitytrails.com", description: "DNS history & subdomains" },
      { name: "DNSDumpster", url: "https://dnsdumpster.com", description: "DNS recon & host mapping" },
      { name: "WHOIS", url: "https://who.is", description: "Domain registration lookup" },
    ],
  },
  {
    name: "Social Media",
    tools: [
      { name: "Social Searcher", url: "https://www.social-searcher.com", description: "Real-time social media search" },
      { name: "Sociallinks", url: "https://sociallinks.io", description: "Social media intelligence" },
      { name: "Twint", url: "https://github.com/twintproject/twint", description: "Twitter scraping without API" },
      { name: "Instagram OSINT", url: "https://github.com/sc1341/InstagramOSINT", description: "Instagram account intel" },
    ],
  },
  {
    name: "Images & Geolocation",
    tools: [
      { name: "Google Reverse Image", url: "https://images.google.com", description: "Reverse image search" },
      { name: "TinEye", url: "https://tineye.com", description: "Reverse image search & tracking" },
      { name: "Yandex Images", url: "https://yandex.com/images", description: "Best for face matching" },
      { name: "GeoGuessr", url: "https://www.geoguessr.com", description: "Geolocation practice" },
      { name: "Mapillary", url: "https://www.mapillary.com", description: "Crowdsourced street imagery" },
      { name: "ExifTool", url: "https://exiftool.org", description: "Read image metadata" },
    ],
  },
  {
    name: "Maps & Satellite",
    tools: [
      { name: "Google Earth", url: "https://earth.google.com", description: "Satellite & 3D imagery" },
      { name: "Bing Maps", url: "https://www.bing.com/maps", description: "Aerial & bird's-eye view" },
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org", description: "Open mapping data" },
      { name: "Sentinel Hub", url: "https://www.sentinel-hub.com", description: "Satellite imagery archive" },
    ],
  },
  {
    name: "Archives & Wayback",
    tools: [
      { name: "Wayback Machine", url: "https://web.archive.org", description: "Internet Archive" },
      { name: "Archive.today", url: "https://archive.ph", description: "On-demand page archiver" },
      { name: "Cachedview", url: "https://cachedview.com", description: "View cached pages" },
    ],
  },
];
