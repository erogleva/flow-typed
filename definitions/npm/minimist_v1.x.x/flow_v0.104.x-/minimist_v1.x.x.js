declare module 'minimist' {
  declare type minimistOptions = {
    string?: string | Array<string>,
    boolean?: boolean | string | Array<string>,
    alias?: { [arg: string]: string | Array<string>, ... },
    default?: { [arg: string]: any, ... },
    stopEarly?: boolean,
    // TODO: Strings as keys don't work...
    // '--'? boolean,
    unknown?: (param: string) => boolean,
    ...
  };

  declare type minimistOutput = {
    [flag: string]: string | boolean,
    _: Array<string>,
    ...
  };

  declare module.exports: (argv: Array<string>, opts?: minimistOptions) => minimistOutput;
}
