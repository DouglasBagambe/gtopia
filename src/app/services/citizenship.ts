"Use Server"
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { useEffect, useState } from 'react';
import { Connection, Keypair, SystemProgram } from '@solana/web3.js';
// import { IDL } from '../idl/gtopia_citizenship';
import { PROGRAM_ID, ProgramState, CitizenshipAccount, VisaAccount } from '../types/program';
import { BN } from 'bn.js';

export const useProgram = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [program, setProgram] = useState<Program | null>(null);
  const [programState, setProgramState] = useState<ProgramState | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (wallet && connection) {
      const provider = new AnchorProvider(
        connection,
        wallet as any,
        AnchorProvider.defaultOptions()
      );
      setProgram(new Program(IDL, PROGRAM_ID, provider));
    }
  }, [wallet, connection]);

  const purchaseCitizenship = async (isSenior: boolean) => {
    if (!program || !wallet.publicKey) throw new Error('Program not initialized');
    
    setLoading(true);
    try {
      const citizenshipKeypair = Keypair.generate();
      
      const tx = await program.methods
        .purchaseCitizenship(isSenior)
        .accounts({
          state: PROGRAM_ID,
          citizenship: citizenshipKeypair.publicKey,
          authority: wallet.publicKey,
          payer: wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([citizenshipKeypair])
        .rpc();

      return { success: true, signature: tx, citizenshipAddress: citizenshipKeypair.publicKey };
    } catch (error) {
      console.error('Error purchasing citizenship:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const purchaseVisa = async (isSenior: boolean, durationHours: number) => {
    if (!program || !wallet.publicKey) throw new Error('Program not initialized');
    
    setLoading(true);
    try {
      const visaKeypair = Keypair.generate();
      
      const tx = await program.methods
        .purchaseVisa(isSenior, new BN(durationHours))
        .accounts({
          state: PROGRAM_ID,
          visa: visaKeypair.publicKey,
          authority: wallet.publicKey,
          payer: wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([visaKeypair])
        .rpc();

      return { success: true, signature: tx, visaAddress: visaKeypair.publicKey };
    } catch (error) {
      console.error('Error purchasing visa:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchProgramState = async () => {
    if (!program) return null;
    try {
      const state = await program.account.programState.fetch(PROGRAM_ID);
      setProgramState(state as unknown as ProgramState);
      return state;
    } catch (error) {
      console.error('Error fetching program state:', error);
      return null;
    }
  };

  return {
    program,
    programState,
    loading,
    purchaseCitizenship,
    purchaseVisa,
    fetchProgramState
  };
};