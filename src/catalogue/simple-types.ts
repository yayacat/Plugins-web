import { AuthorInfo, Releases, cdps_json } from "@/catalogue/meta-types";

export interface SimpleEverything {
  // timestamp: number
  // authors: AuthorSummary
  last_update_time: string
  plugin_list: {
    [key: string]: SimplePlugin
  }
  info: {
    [key: string]: cdps_json
  }
  PluginInfo: {
    [key: string]: Releases[]
  }
}

export interface SimplePlugin {
  id: string
  repos: string
  reposHome: string
  labels: string[]
  authors: AuthorInfo[]
  downloads: number
  latestRelease: SimpleRelease
  name: string
  description: string
  tag: string[]
  github: string
  package_name: string
  last_update_time: string
  version: string
}

export interface SimpleRelease {
  version: string
  url: string
  assetName: string
  assetUrl: string
}

