const isCmdLineArgumentsValid = (cmdLineArgs: Array<string>): boolean => {
  const args = cmdLineArgs.slice(2);

  if (args.length !== 2) {
    return false;
  }

  const updateTimes = Number(args[0]);
  const apiCallTimes = Number(args[1]);

  return !(isNaN(updateTimes) || isNaN(apiCallTimes)) ;
};

interface CmdArguments {
  updateTimes: number;
  apiCallTimes: number;
}

export const getCmdLineArguments = (cmdLineArgs: Array<string>): CmdArguments | undefined => {
  if (!isCmdLineArgumentsValid(cmdLineArgs)) {
    return;
  }
  const args = cmdLineArgs.slice(2);

  const updateTimes = Number(args[0]);
  const apiCallTimes = Number(args[1]);

  return { updateTimes, apiCallTimes };
};
