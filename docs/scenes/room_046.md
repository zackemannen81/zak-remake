# Room 046 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] stopObjectCode();
```

## OCv2_0082 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt); entry `001D`.

```text
[001D] startScript(58);
[001F] stopObjectCode();
```

## OCv2_0082 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt); entry `0020`.

```text
[0020] startScript(131);
[0022] stopObjectCode();
```

## OCv2_0082 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0082.txt); entry `001D`.

```text
[001D] startScript(58);
[001F] stopObjectCode();
```

## OCv2_0083 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt); entry `001D`.

```text
[001D] startScript(58);
[001F] stopObjectCode();
```

## OCv2_0083 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt); entry `0020`.

```text
[0020] startScript(131);
[0022] stopObjectCode();
```

## OCv2_0083 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0083.txt); entry `001D`.

```text
[001D] startScript(58);
[001F] stopObjectCode();
```

## OCv2_0671 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0671.txt](../../zak/converted/scripts_flat/LFv2_0046/ROv2/OCv2_0671.txt); entry `0013`.

```text
[0013] walkActorTo(1,45,58);
[0017] waitForActor(1);
[0019] walkActorTo(1,74,58);
[001D] waitForActor(1);
```

## SCv2_0131 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0046/SCv2_0131.txt](../../zak/converted/scripts_flat/LFv2_0046/SCv2_0131.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT2 == 194) goto 0009;
[0009] unless (VAR_ACTIVE_OBJECT2 == 220) goto 0018;
[000F] doSentence(11,VAR_ACTIVE_OBJECT2,0,0);
[0018] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[001D] stopObjectCode();
```
