import { CasperClient, CLPublicKey, DeployUtil, Keys } from 'casper-js-sdk';

const client = new CasperClient('http://127.0.0.1:7777');

async function addPatient(publicKeyHex, privateKeyHex, patientDetails) {
  const publicKey = CLPublicKey.fromHex(publicKeyHex);
  const privateKey = Keys.Ed25519.parsePrivateKey(Uint8Array.from(Buffer.from(privateKeyHex, 'hex')));

  const deployParams = new DeployUtil.DeployParams(publicKey, 'casper-test');

  // Replace with your contract hash
  const contractHash = Uint8Array.from(Buffer.from('your_contract_hash', 'hex'));

  const session = DeployUtil.ExecutableDeployItem.newStoredContractByHash(
    contractHash,
    'add_patient',
    DeployUtil.RuntimeArgs.fromMap(patientDetails)
  );

  const payment = DeployUtil.standardPayment(1000000000);
  const deploy = DeployUtil.makeDeploy(deployParams, session, payment);

  const signedDeploy = DeployUtil.signDeploy(deploy, privateKey);
  const deployHash = await client.putDeploy(signedDeploy);

  console.log(`Deploy hash: ${deployHash}`);
  return deployHash;
}

export { addPatient };