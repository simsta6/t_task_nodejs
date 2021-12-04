const isCmdLineArgumentsValid = (cmdLineArgs: string[]): boolean => {
  const args = cmdLineArgs.slice(2);

  if (args.length != 2) {
    return false;
  }

  const updateTimes = +args[0];
  const apiCallTimes = +args[1];

  return !(isNaN(updateTimes) || isNaN(apiCallTimes)) ;
};

interface CmdArguments {
  updateTimes: number;
  apiCallTimes: number;
}

export const getCmdLineArguments = (cmdLineArgs: string[]): CmdArguments => {
  if (!isCmdLineArgumentsValid(cmdLineArgs)) {
    return { updateTimes: -1, apiCallTimes: -1 };
  }
  const args = cmdLineArgs.slice(2);

  const updateTimes = +args[0];
  const apiCallTimes = +args[1];

  return { updateTimes, apiCallTimes };
};
