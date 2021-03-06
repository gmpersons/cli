import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'init',
  alias: ['i'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      // parameters,
      template: { generate },
      print: { info }
    } = toolbox

    toolbox.filesystem.append('.gitignore', '\n\n.supabase')

    await generate({
      template: 'init/config.json',
      target: `./.supabase/config.json`
    })
    await generate({
      template: 'init/emulator.yml',
      target: `./.supabase/emulator.yml`
    })
    await generate({
      template: 'init/README.txt',
      target: `./.supabase/README.txt`
    })

    info(`Project initialised.`)
  }
}
