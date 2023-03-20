const remoteViewPlayer = document.getElementById("remote-view");
const localViewPlayer = document.getElementById("local-view");

const localviewSrc = "";
const remoteviewSrc = "";
export let setlocalViewSrc = (stream) => {
  console.log({ document: document.getElementById("root") });
  localViewPlayer.srcObject = stream;
};

export let setRemoteViewSrc = (stream) => {
  remoteViewPlayer.srcObject = stream;
  remoteviewSrc = stream;
};

export const getStates = () => {
  return { localviewSrc, remoteviewSrc };
};
